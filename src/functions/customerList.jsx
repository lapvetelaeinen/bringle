export function customerList() {
    let customers = JSON.parse(localStorage.getItem('customers'));
    if(customers === null) {
        customers = [
            {
                name: "",
                address: "",
                email: ""
            }
        ] 
    }
    if (!Array.isArray(customers)) {
        const array = [JSON.parse(localStorage.getItem('customers'))];
        return array;
    }

    return customers;
}


