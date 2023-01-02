import "./Home.css";
export default function Home() {
  return (
	<div>
		<div id="body_content">
			<hr class = "line"></hr>
				<div id="profile_pic">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyr-guOND_DzAmtWfqj-HbF-2wK7g0Z2zOA&usqp=CAU cente" alt="Trulli" class="center" />
					<h3 id="user_name">Amir Adamov</h3>
					</div>
					<div id="body_text">
						<p><b>Age</b><span id="bar1"></span>22</p>
						<p><b>Phone</b><span id="bar2"></span>+994515042506</p>
						<p><b>Email</b><span id="bar3"></span>amir@adamov.net.ru</p>
						<p><b>Education</b><span id="bar4"></span>Computer Scientist</p>
						<br />
						<div class="container">
							<div class="box">PHP</div>
							<div class="box">Laravel</div>
							<div class="box">Python</div>
							<div class="box">HTML5/CSS3</div>
						</div>
						<br />
					</div>
					<hr class = "line"></hr>
					<div class="abut_me">
			<h2 class="info">About</h2>
			<p class="info">I am Computer Scientist Student at ADA University. I mainly program on php. Besides being a student I am a son, husb... just a son.
			</p>
			<br />
			<h2 class="info">Insterests</h2>
			<p class="info">Trying new things out. Cooking. Eating. Drawing. And there some of the codding...</p>
		</div>
		</div>
	</div>
  );
}
