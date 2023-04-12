export class user{

    nom!: String;
    prenom!:String;
    mail!:String;
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
      




}