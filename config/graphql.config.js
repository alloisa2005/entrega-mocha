const { buildSchema } = require('graphql');

let clients = [];
let counter = 1;

let schema = buildSchema(`
  type Client {
    id: Int
    name: String
    phone: String
  }

  type Query {
    clients: [Client]
    clientById(id: Int): Client
  }

  type Mutation {
    addClient(name: String, phone: String): Client
  }
`);

let root = {
  clients: () => clients,
  clientById: (data) => {    
    for (let i = 0; i < clients.length; i++) {
      if(clients[i].id === data.id) return clients[i]      
    }
    return {}
  },
  addClient: (data) => {
    let c = { id: counter, name: data.name, phone: data.phone }
    clients.push(c)
    counter++;
    return c;
  }
}


module.exports = { schema, root };