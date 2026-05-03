class BankAccount {
    #balance=100;
    constructor( balance = 0)
    {
        this.#balance = balance;
    }
    deposit(amount)
    {
        if(amount > 0)
        {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
        }
        else
        {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount)
    {
        if(amount > 0)
        {    
            if(this.#balance >= amount)
            {
                this.#balance -= amount;
                console.log(`Withdrew: ${amount}. New Balance: ${this.#balance}`);
            }
            else
            {
                console.log("Insufficient funds.");
            }
        }
        else
        {
            console.log("Withdrawal amount must be positive.");
        }
    }
    getBalance()
    {
        console.log(`Current Balance: ${this.#balance}`);
    }
}

const myAccount = new BankAccount();
myAccount.getBalance();
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.getBalance();
const anotherAccount = new BankAccount(200);
anotherAccount.getBalance();
anotherAccount.withdraw(250);
anotherAccount.deposit(100);
anotherAccount.getBalance();