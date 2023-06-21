import db from "./mongoConnect.js"

const furnitureDB = db.collection('furniture')

export const addFurniture = async (req, res) => {       //function to add furniture to our mongodb 
    
    // const newFurniture = {type: "sofa", collection: "Edgewater", special: false, price: 4899, in_stock: false}
    
   const newFurnitureAdded = await furnitureDB.insertOne(req.body)

   console.log(newFurnitureAdded);

   return res.status(200).send(newFurnitureAdded)
}

export const getAllFurniture = async (req, res) => {
    const data = await db.collection('furniture')  .find().toArray();

     res.status(200).send(data);

}