const ProductDao = require ('../DAO/product-dao.mongo')
const Product = new ProductDao()

const getProductByID = async pid => {
    try {
      const findID = await Product.getProductByID(pid)
      return findID
    } catch (error) {
        throw error
      } 
  }

const addProduct = async product => {
 try {
      const result = await Product.addProduct(product) 
      return result
  } catch (error) {
      throw error
    }  
}

const updateProduct = async productUpdated => {
  try {
       await Product.updateProduct(productUpdated) 
   } catch (error) {
       throw error
     }  
 }

 const deleteProduct = async pid => {
  try {
       const result = await Product.deleteProduct(pid) 
       return result
   } catch (error) {
       throw error
     }  
 }

  module.exports = {
    getProductByID, addProduct, updateProduct, deleteProduct
  }