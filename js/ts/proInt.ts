//Interface 1
interface OS {  
    name: String;  
    language: String;  
}  
let OperatingSystem = (type: OS): void => {  
  console.log(`Android ${type.name} has ${type.language} language.`);  
};  
let Oreo = {name: 'Z', language: 'Javascript'}  
OperatingSystem(Oreo); 