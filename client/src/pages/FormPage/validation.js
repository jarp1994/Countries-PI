export default function validation (inputs){
    const errors={};
    const name = /^[a-zA-Z ]+$/;
    const difficulty = /^[1-5]+$/;
    const duration = /^[1-5]+$/;

    if(!name.test(inputs.name) && inputs.name !== ""){
        errors.name = "The name cant contain numbers";
    }
    if(inputs.difficulty < 1 || inputs.difficulty > 5 ){
        errors.difficulty = "The difficulty must be between 1, that is easier and 5 that is the hardest";
    }
    if(inputs.duration < 1 || inputs.duration > 5){
        errors.duration = "The duration must be between 1-5 hours";
    }

    return errors
}