const apiKey="1f0f8da045688a3456d40ea2d5dc2795"
//DOM取得
const ul=document.querySelector('ul');
const Button=document.querySelector("button");

//json取得
async function getMovies(){
    const res=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
    const data=await res.json();
    return data;
}

//関数
async function listMovies(){
    try{
        const data=await getMovies();

        for(let i=0;i<data.results.length;i++){
        const li=document.createElement("li");
        const img=document.createElement("img");
        const p=document.createElement("p");
        const listImg=img.src=`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.results[i].poster_path}`;
        p.append(data.results[i].title);
        li.append(p);
        li.append(img);
        ul.append(li); 
        }
        
        Button.style.display="none";
    }
    catch(e){
        console.log("問題が起きました",e);
    };
};

//イベント
Button.addEventListener("click",listMovies);



