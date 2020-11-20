export function deliveriesList(specificCustomer) {
    let deliveries = JSON.parse(localStorage.getItem('deliveries'));
    if(deliveries === null) {
        deliveries = [
            {
                date: new Date(),
                customer: "",
                type: "delivery",
                cPlus: "",
                cMinus: "",
                sPlus: "",
                sMinus: "",
                oPlus: "",
                oMinus: ""
            }
        ] 
    }
    if (!Array.isArray(deliveries)) {
        const array = [JSON.parse(localStorage.getItem('deliveries'))];
        const filteredArray = array.filter(delivery => delivery.customer === specificCustomer);
        return filteredArray;
    }
    const filteredDeliveries = deliveries.filter(delivery => delivery.customer === specificCustomer);
    return filteredDeliveries;
}


