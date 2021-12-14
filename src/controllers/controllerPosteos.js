let posteos = [
{  
  nombre:"Viaje a la costa",
  descripcion:"lorem ipsum indolor sit",
}  
]

export const inicio = async (req,res)=>{
  
  res.status(200).render('inicio')
}  