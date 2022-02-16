const Role = require('../models/roles.model');

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if( count > 0 ) return;

        const values = await Promise.all([
            new Role({ name: "Sistem" }).save(),
            new Role({ name: "Metrologi" }).save(),
            new Role({ name: "Admin" }).save(),
            new Role({ name: "Market"}).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error)
    }  
};