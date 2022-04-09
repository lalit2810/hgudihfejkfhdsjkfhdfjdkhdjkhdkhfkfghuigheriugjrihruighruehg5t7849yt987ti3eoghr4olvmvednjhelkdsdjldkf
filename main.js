Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_spanshot()
{
    Webcam.span(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
       
     });
}
classifier = ml5.imageClassifier(https://teachablemachine.withgoogle.com/models/iXSfcM2Mu/model.json,modelLoaded);