console.log("Hi!")

//Start talking with Myo Connect
Myo.connect('co.givemeta');

Myo.on('fist', function(){
    console.log('Hello Myo!');
});