var ffprobe = require("ffprobe");
var ffprobeStatic = require("ffprobe-static");

ffprobe("Test1.MOV", { path: ffprobeStatic.path }, function(err, data) {
  var vinfo = {
    codec: data.streams[0].codec_name,
    bit_rate: parseFloat((data.streams[0].bit_rate / 1000000).toFixed(2)),
    frame_rate: data.streams[0].r_frame_rate
  };

  console.log("Informações Video: ");
  console.log("codec: " + vinfo.codec);
  console.log("bit_rate: " + vinfo.bit_rate + " Mbps");
  console.log(
    "frame_rate: " +
      vinfo.frame_rate.substring(0, vinfo.frame_rate.length - 2) +
      " fps"
  );

  if (data.streams[0].tags.rotate == "90") {
    console.log("Rotação: Video Portrait");
  } else {
    console.log("Rotação: Video Landscape");
  }

  //console.log(data.streams[0].tags.rotate); //all informations
});
