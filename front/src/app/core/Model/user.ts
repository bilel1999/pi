export class User{
    idUser!:String;
    nom!: String;
    prenom!:String;
    mail!:String;
    role!:String;
    password!:String;
    numero!: String;
    //Patient-specific attributes
    age!:Number;
    sex!:String;
    weight!: Number;
    chronicDisease!: {
        type: Boolean,
        default: false,
      };
      ecgSignal!: {
        type: [Number],
        default: [],
      };
      
       // Doctor-specific attributes
  photo?: String;
  location?: String;
  speciality?: String;



}