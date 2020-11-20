import { customerList } from './customerList';

export function optionsCustomer() {

    const customers = customerList();
    const options = customers.map(item => {
        const container = {};

        container.value = item.name;
        container.label = item.name;

        return container;

    })

    return options
}


