// Question 1
const makeAccount = (startBal) => {
  let balance = startBal;
  return {
    checkBalance() {
      return balance;
    },
    add(addMoney) {
      balance += addMoney;
      return `${addMoney} added`
    },
    subtract(subMoney) {
      balance -= subMoney;
      return `${subMoney} subtracted`
    },
  };
};

// Question 2

class SavingsAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    showBalance() {
        return `$${this.balance }` 
    }
    depositFunds(addMoney) {
        if(addMoney <= 0) return `"Please include a deposit amount that is greater than 0"`
        this.balance += addMoney;
        return `${addMoney} deposited` 
    }
    withdrawFunds(subMoney) {
        if(subMoney > this.balance) return 'Insufficient Funds';
            else {
        this.balance -= subMoney;
        return `${subMoney} withdrawn`;
        }
    }
}

// Question 3
class Phone {
  constructor() {
    this.contacts = [];
  }
  addContact(name, phoneNumber) {
    for(key of this.contacts) {
      if(!key.name || key.phoneNumber.length > 10) return 'Invalid';
      else {
        this.contacts.push({name:`${name}`,phoneNumber:`${phoneNumber}`});
        return `${name} added.`;
      }
    }
  }
  removeContact(contact) {
    for(key of this.contacts) {
      if(key.name == contact) {
        delete key.name;
        delete key.phoneNumber;
        this.contacts.filter((data) => { return data != undefined || null || NaN || "" }); 
        // Above line is to remove empty objects within array.
        return `${contact} removed.`
      }
    }
  return 'Contact not found.'
}
  call(nameOrNumber) {
    for(key of this.contacts) {
      if(typeof nameOrNumber == 'string' && nameOrNumber.length == 10) return `Calling ${nameOrNumber}`;
      if(key.name == nameOrNumber || key.phoneNumber == nameOrNumber) return `Calling ${nameOrNumber}`
      else { return 'Contact not found.'}
    }
  }
};

// Question 4

// Question 5



module.exports = {
  // makeAccount,
  // SavingsAccount
  // Phone
  // AppleiPhone
  // Person
  // Student
  // GraduateStudent
  // Professor
  // Doctor
};
