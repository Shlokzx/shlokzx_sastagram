const users = [
  {
    profilePic: "./shlokpp.jpg",
    storyImg: "./shlokpp.jpg"
  },
  {
    profilePic: "./jiapp.jpg",
    storyImg: "./jiastory.jpg"
  },
  {
    profilePic: "https://i.pinimg.com/736x/de/5e/d2/de5ed25804e4d4401260b4698de082b0.jpg",
    storyImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    profilePic: "https://i.pinimg.com/736x/fe/10/05/fe1005fe8d85a9a2c41334262fa79954.jpg",
    storyImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    profilePic: "https://i.pinimg.com/736x/a8/63/f9/a863f9f7ca73d907fd8aa16decc88e14.jpg",
    storyImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    profilePic: "https://i.pinimg.com/1200x/72/3e/1e/723e1e37f5cd068a02daf125f6bf6646.jpg",
    storyImg: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    profilePic: "https://i.pinimg.com/736x/a5/0f/ff/a50fff6fe306f9417e99163fe3d61f39.jpg",
    storyImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    profilePic: "https://i.pinimg.com/1200x/f5/e2/fb/f5e2fb51fcb62017a89fbcfe97bd6897.jpg",
    storyImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    profilePic: "https://i.pinimg.com/1200x/84/59/e9/8459e98618f904ceea429e460e7c0771.jpg",
    storyImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    profilePic: "https://i.pinimg.com/736x/29/6b/e4/296be448f5e9e6be5cdec924e536d88a.jpg",
    storyImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
  }
];

let sum = '';
users.forEach((elem,idx)=>{
    sum+=`<div class="story">
                <img id=${idx} src="${elem.profilePic}" alt="">
            </div>`;
})

let storiyan = document.querySelector('.storiyan');
storiyan.innerHTML = sum

storiyan.addEventListener('click',function(dets){
  let fullscr = document.querySelector('#full-screen')
  fullscr.style.display = 'block';
  fullscr.style.backgroundImage = `url(${users[dets.target.id].storyImg})`

  setTimeout(() => {
    fullscr.style.display = 'none';
  }, 3000);
})