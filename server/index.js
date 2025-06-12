const PROTO_PATH = './customers.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
})

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [
    { id: '1', name: 'John Doe', age: 22, address: '123 Main St' },
    { id: '2', name: 'Jane Smith', age: 20, address: '124 Main St' },
    { id: '3', name: 'Alice Johnson', age: 21, address: '125 Main St' },
    { id: '4', name: 'Bob Brown', age: 24, address: '120  Main St' }
];

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers: customers });
    },
    get: (call, callback) => {
        const customer = customers.find(c => c.id === call.request.id);
        if (customer) {
            callback(null, customer);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Customer not found"
            });
        }

    },
    insert: (call, callback) => {
        let customer = call.request;
        customer.id = String(customers.length + 1); // Simple ID generation
        customers.push(customer);
        callback(null, customer);

    },
    update: (call, callback) => {
        let customer = call.request;
        const index = customers.findIndex(c => c.id === customer.id);
        if (index !== -1) {
            customers[index] = customer;
            callback(null, customer);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Customer not found"
            });
        }

    },
    remove: (call, callback) => {
        let id = call.request.id;
        const index = customers.findIndex(c => c.id === id);
        if (index !== -1) {
            customers.splice(index, 1);
            callback(null, { success: true });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Customer not found"
            });
        }
    },
})

server.bindAsync("127.0.1:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error("Error binding server:", err);
        return;
    }
    server.start();
    console.log(`Server running at http://127.0.1:${port}`);
});