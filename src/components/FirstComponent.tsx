import { useState } from "react"

type infoProps ={
  name : string;
  age? : number | any,
  compter?:number
}

function FirstComponent({name,age, compter}:infoProps) {
  

  const monNomEtAge = <strong> Bonjour votre nom est: {name} votre age est: {age} ans</strong>
  
  const checkOld=(condition: number)=> {
    if (condition <= 17) {
        return <h4> Vous etes mineur</h4>
    } else{
        return <h4> Vous etes majeur</h4>
    }
}
 


  return (
    <>
    
      <h2>BIENVENUE DANS ACCUEIL</h2>

    </>
  ) 
}

export default FirstComponent
