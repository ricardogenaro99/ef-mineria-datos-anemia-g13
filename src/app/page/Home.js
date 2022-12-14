import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<div className="p-5 mb-4 bg-light rounded-3">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">Anemia</h1>
					<p className="fs-5">
						La anemia es una afección en la cual careces de suficientes glóbulos
						rojos sanos para transportar un nivel adecuado de oxígeno a los
						tejidos del cuerpo. La anemia, también conocida como nivel bajo de
						hemoglobina, puede hacer que te sientas cansado y débil.
					</p>
					<p className="fs-5">
						Existen muchas formas de anemia, cada una con su propia causa. La
						anemia puede ser temporal o prolongada y puede variar de leve a
						grave. En la mayoría de los casos, la anemia tiene más de una causa.
						Consulta con el médico si sospechas que tienes anemia. Puede ser una
						señal de advertencia de una enfermedad grave.
					</p>
					<p className="fs-5">
						Los tratamientos para la anemia, que dependen de la causa, abarcan
						desde tomar suplementos hasta someterse a procedimientos médicos.
						Podrías prevenir algunos tipos de anemia si sigues una dieta
						saludable y variada.
					</p>
					<Link to="test" className="btn btn-warning btn-lg">
						Hacerme un test
					</Link>
				</div>
			</div>

			<div className="row align-items-md-stretch">
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-dark rounded-3">
						<h2>
							SISTEMA DE INFORMACIÓN DEL ESTADO NUTRICIONAL de niños y gestantes
							Perú - INS/CENAN (Instituto Nacional de Salud - Centro Nacional de
							Alimentación y Nutrición)
						</h2>
						<p>
							En el año 2003, el INS/CENAN implementa el Sistema de Información
							del Estado Nutricional-SIEN, basado en un proceso continuo y
							sistemático que registra, procesa, reporta y analiza información
							del estado nutricional de niños menores de cinco años y mujeres
							gestantes que acuden a establecimientos de salud del primer nivel
							de atención del Ministerio de Salud.
						</p>
						<p>
							La fuente de información es secundaria corresponde a la
							información registrada en las Historias Clínicas de los
							Establecimientos de Salud del Ministerio de Salud Perú, el
							registro es diario en el SIEN y HIS/MINSA. El procesamiento y
							limpieza de las bases de datos, generación de reportes mediante
							tablas y gráficas informes gerenciales están a cargo del
							INS/CENAN, financiado por el programa presupuestal articulado
							nutricional (PAN).
						</p>
						<a
							href="https://www.datosabiertos.gob.pe/dataset/sistema-de-informaci%C3%B3n-del-estado-nutricional-de-ni%C3%B1os-y-gestantes-per%C3%BA-inscenan-instituto-5"
							target="_blank"
							rel="noopener noreferrer"
							className="fs-4 text-warning text-decoration-none"
						>
							Datos abiertos
						</a>
					</div>
				</div>
				<div className="col-md-6">
					<div className="h-100 p-5 bg-light border rounded-3">
						<div>
							<h5>Unidad de análisis</h5>
							<ul>
								<li>Niños menores de 5 años de edad</li>
								<li>Gestantes</li>
							</ul>
						</div>

						<div>
							<h5>Variables recolectadas</h5>
							<ul>
								<li>
									Niños y niñas menores de 5 años: Peso, talla, edad,
									hemoglobina o hematocrito.
								</li>
								<li>
									Gestante: peso actual, talla, edad, peso pregestacional,
									semana gestacional, tipo de embarazo.
								</li>
							</ul>
						</div>

						<div>
							<h5>Indicadores</h5>
							<ul>
								<li>
									<h6>Niñas y niños menores de 5 años</h6>
									<ul>
										<li>Talla/Edad (Desnutrición Crónica)</li>
										<li>Peso/Edad (Desnutrición Global)</li>
										<li>
											Peso/talla (Desnutrición aguda, sobrepeso, Obesidad)
										</li>
										<li>
											Hemoglobina o Hematocrito (Anemia leve, moderada y severa)
										</li>
									</ul>
								</li>
								<li>
									<h6>Gestantes</h6>
									<ul>
										<li>
											Ganancia de peso baja, adecuada y alta, según IMC Peso
											Pre- gestacional
										</li>
										<li>
											Hemoglobina o Hematocrito (Anemia leve, moderada y severa)
										</li>
									</ul>
								</li>
							</ul>
						</div>

						<div>
							<h5>Estándares de referencia</h5>
							<ul>
								<li>
									<span className="h6">
										Estado nutricional de niños menores de 05 años:{" "}
									</span>
									Patrones de crecimiento OMS 2006.
								</li>
								<li>
									<h6>Estado nutricional de gestantes:</h6>
									<ul>
										<li>
											IMC pregestacional. El estado físico: uso e interpretación
											de la antropometría. Informe del Comité de Expertos de la
											OMS, Serie de Informes técnicos 854, Ginebra, Suiza. OMS,
											1995.
										</li>
										<li>
											Ganancia de peso: Institute of Medicine: Weight Gain
											During Pregnancy: Reexamining the Guidelines. Washington,
											National Academy Press, 2009.
										</li>
									</ul>
								</li>
								<li>
									<span className="h6">Diagnóstico de Anemia: </span>
									Rangos OMS - MINSA. Prevención y Control de la Deficiencia de
									Hierro Lima, 2000. Adaptado según altitud.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
