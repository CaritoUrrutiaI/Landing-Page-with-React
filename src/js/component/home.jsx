import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	const datos = [
		//datos para las card
		{
			title:"Betarraga",
			descripcion:"Tiernos brotes de betarragas",
			img:"https://commondatastorage.googleapis.com/files-pot-cl/images/uploads/post_show_1488985433-Microgreens-growing.jpg",
			buttonUrl:"info",
			buttonLabel:"Aprender más"
		},
		{
			title:"Albahaca",
			descripcion:"Sabor en brotes de albahaca",
			img:"https://gustobuenvivir.files.wordpress.com/2012/09/img_3665.jpg",
			buttonUrl:"info",
			buttonLabel:"Me interesa"
		},
		{
			title:"Arvejas",
			descripcion:"Deliciosas brotes de arvejas",
			img:"https://fungiverde.com/wp-content/uploads/2021/06/arveja1.jpg",
			buttonUrl:"info",
			buttonLabel:"Más info..."
		},
		{
			title:"Rúcula",
			descripcion:"Color en brotes de rúcula",
			img:"https://img.freepik.com/fotos-premium/microgreens-brotes-rucula-primer-plano_108611-2698.jpg?w=2000",
			buttonUrl:"info",
			buttonLabel:"Leer más"
		},
		{
			title:"Trigo",
			descripcion:"Un shot de energía",
			img:"https://img.freepik.com/fotos-premium/microgreen-granos-trigo-germinados-primer-plano-mano_262708-1208.jpg?w=2000",
			buttonUrl:"info",
			buttonLabel:"Leer más"
		},
	]
	
	return (
		<div className="container-fluid">
			<Navbar/>

			<Jumbotron/>
			
			<div className= "row my-5">
				{datos.map((objeto, posicion)=>{
					/* aqui abajo se define props*/
					return <Card 
						img={objeto.img}	
						title={objeto.title} 
						description={objeto.descripcion}
						buttonUrl={objeto.buttonUrl}
						buttonLabel={objeto.buttonLabel}
					/>
				})}
			</div>
			<Footer/>	
		</div>
	);
};

export default Home;

