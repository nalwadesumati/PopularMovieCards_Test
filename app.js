const  cl = console.log;



let  setRating = (rating)=>{
	if (rating >= 7){
		return "badge-success"
	}else if(rating > 5){
		return "badge-warning"
	}else {
		return "badge-danger"
	}
};


let result ='';

movies.forEach((movie) =>{
	result += `
		<div class="col-md-4 mb-4">
					<div class="card" id="movieContainer">
						<div class="movieCard">
							<figure>
								<img src=${movie.poster} alt="${movie.title}" title="${movie.title}">
								<figcaption>
									<div class="titleInfo">
										<div class="row">
											<div class="col-md-10">
												<h2>${movie.title}</h2>
											</div>
											<div class="col-2">
												<span class="badge ${setRating(movie.rating)}">*${movie.rating}</span>
											</div>
										</div>
									</div>
								</figcaption>
									<div class="overView">
										<h4>${movie.title}</h4>
										<p>${movie.overview}</p>
									</div>
							
							</figure>
						</div>
					</div>
				</div>
	
	`
});

document.getElementById("movie").innerHTML = result;
