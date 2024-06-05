import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.10efa794.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const vector = "/_astro/vector.ec268281.png";

const vector3 = "/_astro/vector3.c9f9716f.png";

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
        <meta name="description" content="Astrobrew is a free and open-source elegant landing page for Micro SaaS products built with Astro & Skeleton CSS">
		<title>${title}</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
        
	${renderHead($$result)}</head>
	<body>
        <img${addAttribute(vector, "src")} alt="Hero illustrator" style="position: absolute; top: 5%; left: 0; width: 100%; max-width: 100%;">
    <img${addAttribute(vector3, "src")} alt="Hero illustrator" style="position: absolute; top: 190%; left: 67%; transform: translateX(-50%); width: 65%; max-width: 65%;">
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/layouts/Layout.astro");

const Logo = "/_astro/banner.f233a231.png";

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
    <nav class="container astro-3EF6KSR2">
        <div class="nav-logo astro-3EF6KSR2">
            <a href=" " class="astro-3EF6KSR2">
                <img${addAttribute(Logo, "src")} alt="brand logo" class="astro-3EF6KSR2">
            </a>
        </div>
        <div class="nav-links astro-3EF6KSR2">
            <a href="https://www.facebook.com/profile.php?id=61550883294798&mibextid=JRoKGi" style="color: #494949; text-decoration: none; " class="astro-3EF6KSR2">Facebook</a>
            <a href="https://www.instagram.com/uhungryoficial?igsh=MTBlM3hkd3VxNXl5eA%3D%3D&utm_source=qr" style="color: #494949; text-decoration: none;" class="astro-3EF6KSR2">Instagram</a>
        </div>
    </nav>
</header>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Header.astro");

const Showcase = "/_astro/launchScreen.0c8ecd60.png";

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-hero centered astro-BBE6DXRZ">
    <div class="container astro-BBE6DXRZ">
        <div class="row astro-BBE6DXRZ">
            <div class="one-half column astro-BBE6DXRZ">
                <div class="d-cell astro-BBE6DXRZ">
                    <h1 class="h1-title astro-BBE6DXRZ">Conectando a través de la <span class="astro-BBE6DXRZ">comida.</span></h1>
                    <div class="content astro-BBE6DXRZ">
                        <p class="astro-BBE6DXRZ">Nosotros somos uHungry?</p>
                        <p class="astro-BBE6DXRZ">uHungry? es una aplicación que simplifica la compra de comida entre particulares o puestos ambulantes. 
                            Conecta a la comunidad estudiantil y al público en general, permitiéndoles comprar y vender alimentos de forma segura. 
                            Lo que nos hace únicos es que cada vendedor tiene un apartado llamado "causa", donde explican por qué venden comida, ya sea para financiar estudios,
                            apoyar una causa benéfica, emprender un negocio o por pasión. Esto crea conexiones auténticas y significativas entre compradores y vendedores.</p>
                        <a href="#" class="google-play-button astro-BBE6DXRZ"></a>
                    </div>
                </div>
            </div>
            <div class="one-half column hero-media astro-BBE6DXRZ">
                <img${addAttribute(Showcase, "src")} class="u-full-width astro-BBE6DXRZ" alt="Hero illustrator">
            </div>
        </div>
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Hero.astro");

const logo = "/_astro/logo1.9a7cf199.png";

const $$Astro$5 = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead($$result)}<section class="container about centered astro-VNIVFUH2" id="aqui">
    <div class="mission-container astro-VNIVFUH2">
        <h2 class="subtitle astro-VNIVFUH2"><b class="astro-VNIVFUH2">Misión.</b></h2>
        <p class="about__paragraph astro-VNIVFUH2">Ser la mejor opción para el emprendimiento estudiantil dentro de la universidad, brindando visibilidad y apoyo a los estudiantes que buscan generar ingresos adicionales mediante la venta de productos o servicios. Nuestra misión es proporcionar una plataforma innovadora y eficiente que facilite la conexión entre estos emprendedores y la comunidad universitaria, fomentando así el crecimiento personal, académico y económico de nuestros estudiantes a través de la colaboración continua.</p>
        <img${addAttribute(logo, "src")} alt="Hero illustrator" class="logo astro-VNIVFUH2">
    </div>
</section>

<section class="container about centered astro-VNIVFUH2" id="aqui">   
    <div class="vision-container astro-VNIVFUH2">
        <h2 class="subtitle astro-VNIVFUH2"><b class="astro-VNIVFUH2">Visión.</b></h2>
        <p class="about__paragraph astro-VNIVFUH2">Nuestra visión es crear un ecosistema donde cada estudiante tenga la oportunidad de desarrollar y promover sus proyectos emprendedores, contribuyendo así al desarrollo integral de la comunidad estudiantil.</p>
        <img${addAttribute(logo, "src")} alt="Hero illustrator" class="logo astro-VNIVFUH2">
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Features.astro");

const user = "/_astro/usuario.8434428d.jpeg";

const admin = "/_astro/admin.93fa76f8.jpeg";

const $$Astro$4 = createAstro();
const $$HowToUse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HowToUse;
  return renderTemplate`${maybeRenderHead($$result)}<input type="checkbox" id="toggle" class="toggle-input astro-5FOL4UCW">
<label for="toggle" class="toggle-label astro-5FOL4UCW"></label>

<section id="section1" class="product-defined padded active astro-5FOL4UCW">
    <p class="h1-title user-title astro-5FOL4UCW">Usuario</p>
    <section class="product-defined padded astro-5FOL4UCW">
        <div class="container astro-5FOL4UCW">
             <div class="row product-brief-items astro-5FOL4UCW">
                <div class="brief-tab one-half column astro-5FOL4UCW">
                    <h3 class="h1-title astro-5FOL4UCW">¿Comó instalarla?</h3>
                    <p class="m-paragraph m-margin astro-5FOL4UCW">Sigue cada uno de estos sencillos pasos para poder hacer uso de nuestra aplicación.</p>
                    <ol class="row astro-5FOL4UCW">
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Presiona el botón de arriba o entra a Google Play y descarga la app.</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Al iniciar la app selecciona la opción "usuario".</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Registrate usando tu correo institucional y acepta el aviso.</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Listo, ahora eres usuario de uHungry?.</a></li>
                    </ol>
                </div>
                <div class="brief-media center one-half column astro-5FOL4UCW">
                    <img${addAttribute(user, "src")} alt="Showcase mockup" style="width: 100%; max-width: 330px; margin-top: 50px; margin-right: 20px;" class="astro-5FOL4UCW">
                </div>
            </div>
        </div>
    </section>
</section>

<section id="section2" class="product-defined padded astro-5FOL4UCW">
    <p class="h1-title admin-title astro-5FOL4UCW">Vendedor</p>
    <section class="product-defined padded astro-5FOL4UCW">
        <div class="container astro-5FOL4UCW">
             <div class="row product-brief-items astro-5FOL4UCW">
                <div class="brief-tab one-half column astro-5FOL4UCW">
                    <h3 class="h1-title astro-5FOL4UCW">¿Comó instalarla?</h3>
                    <p class="m-paragraph m-margin astro-5FOL4UCW">Sigue cada uno de estos sencillos pasos para poder hacer uso de nuestra aplicación.</p>
                    <ol class="row astro-5FOL4UCW">
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Presiona el botón de arriba o entra a Google Play y descarga la app.</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Al iniciar la app selecciona la opción "Administrador de cafe".</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Registrate usando tu cuenta de google y acepta el aviso.</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Registra tu negocio.</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Registra tú producto.</a></li>
                        <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Listo, gracias por unirte a uHungry?.</a></li>
                    </ol>
                </div>
                <div class="brief-media center one-half column astro-5FOL4UCW">
                    <img${addAttribute(admin, "src")} alt="Showcase mockup" style="width: 100%; max-width: 330px; margin-top: 50px; margin-right: 20px;" class="astro-5FOL4UCW">
                </div>
            </div>
        </div>
    </section>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/HowToUse.astro");

const leftarrow = "/_astro/leftarrow.31788860.svg";

const rightarrow = "/_astro/rightarrow.2ab06c71.svg";

const ambulante = "/_astro/ambulante.bb08eecd.jpg";

const cafeteria = "/_astro/cafeteria.2d78c470.jpg";

const puesto = "/_astro/puesto.702ca386.jpg";

const $$Astro$3 = createAstro();
const $$FinalCta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FinalCta;
  return renderTemplate`${maybeRenderHead($$result)}<section class="title-section centered astro-NQZR7C5X">
    <h1 class="astro-NQZR7C5X"><b class="astro-NQZR7C5X">¿Qué puedes encontrar en nuestra app?</b></h1>
</section>


<section class="testimony centered astro-NQZR7C5X">
    <div class="testimony__container container astro-NQZR7C5X">
        <img${addAttribute(leftarrow, "src")} alt="flecha" class="testimony__arrow astro-NQZR7C5X" id="before">

        <section class="testimony__body testimony__body--show astro-NQZR7C5X" data-id="1">
            <div class="testimony__texts astro-NQZR7C5X">
                <h2 class="subtitle astro-NQZR7C5X"><b class="astro-NQZR7C5X">Cafeterías</b><span class="testimony__course astro-NQZR7C5X">Dentro
                        de Ciudad Universitaria.</span></h2>
                <p class="testimony__review astro-NQZR7C5X" style="font-size: 1.2em;">En está aplicación podrás comprar y consultar precios de todas las 
                    cafeterías que se encuentren dentro de C.U.
                </p>
            </div>

            <figure class="testimony__picture astro-NQZR7C5X">
                <img${addAttribute(cafeteria, "src")} class="testimony__img astro-NQZR7C5X">
            </figure>
        </section>

        <section class="testimony__body astro-NQZR7C5X" data-id="2">
            <div class="testimony__texts astro-NQZR7C5X">
                <h2 class="subtitle astro-NQZR7C5X"><b class="astro-NQZR7C5X">Puestos</b><span class="testimony__course astro-NQZR7C5X">En el
                        pabellón Universitario.</span></h2>
                <p class="testimony__review astro-NQZR7C5X" style="font-size: 1.2em;">En está aplicación podrás encontrar de manera sencilla a todos los estudiantes que tienen un puesto
                    en el pabellón universitario, podrás consultar lo que venden y los diversos precios que ofrecen.
                </p>
            </div>

            <figure class="testimony__picture astro-NQZR7C5X">
                <img${addAttribute(puesto, "src")} class="testimony__img astro-NQZR7C5X">
            </figure>
        </section>

        <section class="testimony__body astro-NQZR7C5X" data-id="3">
            <div class="testimony__texts astro-NQZR7C5X">
                <h2 class="subtitle astro-NQZR7C5X"><b class="astro-NQZR7C5X">Comerciantes Ambulantes</b><span class="testimony__course astro-NQZR7C5X">Estudiantes.</span></h2>
                <p class="testimony__review astro-NQZR7C5X" style="font-size: 1.2em;">En está aplicación podrás ver lo que ofrece la comunidad estudiantil,
                    tanto los que venden comida y no puedierón conseguir un lugar en el pabellón, como los que están
                    iniciando un emprendimiento.
                </p>
            </div>

            <figure class="testimony__picture astro-NQZR7C5X">
                <img${addAttribute(ambulante, "src")} class="testimony__img astro-NQZR7C5X">
            </figure>
        </section>


        <img${addAttribute(rightarrow, "src")} alt="flechita" class="testimony__arrow astro-NQZR7C5X" id="next">
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/FinalCta.astro");

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="centered astro-SZ7XMLTE">
  <div class="container astro-SZ7XMLTE">
    <div class="flex astro-SZ7XMLTE">
      <a href="mailto:u.hungryofficial@gmail.com?subject=Soporte%20técnico&body=Hola,%20Soy%20un%20usuario%20de%20uHungry%20y%20tengo%20un%20problema" class="astro-SZ7XMLTE">Ayuda</a>
      <a href="javascript:void(0)" id="privacyLink" class="astro-SZ7XMLTE">Aviso de Privacidad</a>
      <a href="javascript:void(0)" id="legalLink" class="astro-SZ7XMLTE">Aviso Legal</a>
    </div>
    <div class="center astro-SZ7XMLTE">
      <a href="#" class="astro-SZ7XMLTE">
        <img src="Start" alt="" class="astro-SZ7XMLTE">
      </a>
    </div>
  </div>
</footer>


<div id="privacyModal" class="modal astro-SZ7XMLTE">
  <div class="modal-content astro-SZ7XMLTE">
    <h2 class="astro-SZ7XMLTE">Aviso de privacidad</h2>
    <p class="astro-SZ7XMLTE">Nosotros, uHungry, somos responsables del tratamiento de sus datos personales, los cuales serán protegidos conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, así como cualquier otra disposición legal aplicable en México.</p>
    <ol class="astro-SZ7XMLTE">
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Datos personales recopilados</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Información de contacto: nombre, dirección de correo electrónico, número de teléfono.</li>
          <li class="astro-SZ7XMLTE">Información de registro: nombre de usuario, contraseña.</li>
          <li class="astro-SZ7XMLTE">Información de perfil: preferencias de comida, historial de pedidos.</li>
          <li class="astro-SZ7XMLTE">Información de ubicación: datos de geolocalización.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Finalidades del tratamiento de datos</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Procesar pedidos de comida y artículos en el campus universitario.</li>
          <li class="astro-SZ7XMLTE">Facilitar la comunicación entre usuarios y proveedores.</li>
          <li class="astro-SZ7XMLTE">Personalizar la experiencia del usuario y recomendar productos.</li>
          <li class="astro-SZ7XMLTE">Mejorar y mantener la seguridad y funcionamiento de la aplicación.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Transferencias de datos</strong>
        <p class="astro-SZ7XMLTE">Sus datos personales podrán ser transferidos y almacenados en servidores de Amazon Web Services (AWS) u otros proveedores de servicios en la nube que puedan estar ubicados dentro o fuera de México, garantizando en todo momento la seguridad y confidencialidad de sus datos de acuerdo con la legislación aplicable.</p>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Derechos ARCO</strong>
        <p class="astro-SZ7XMLTE">Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales, así como a revocar el consentimiento otorgado para su uso, a través de los procedimientos que hemos implementado. Para ejercer estos derechos, puede contactarnos a través de u.hungryofficial@gmail.com o mediante los medios proporcionados dentro de la aplicación.</p>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Cambios al aviso de privacidad</strong>
        <p class="astro-SZ7XMLTE">Nos reservamos el derecho de realizar modificaciones o actualizaciones a este aviso de privacidad en cualquier momento, lo cual será notificado a través de la aplicación uHungry o mediante otros medios adecuados.</p>
        <p class="astro-SZ7XMLTE">Al utilizar la aplicación uHungry, usted acepta los términos y condiciones establecidos en este aviso de privacidad.</p>
        <p class="astro-SZ7XMLTE">Fecha de última actualización: 01/03/2024</p>
      </li>
    </ol>
    <!-- Botón para cerrar el modal -->
    <button id="closePrivacyModalButton" class="close astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">Ok</span></button>
  </div>
</div>

<div id="legalModal" class="modal astro-SZ7XMLTE">
  <!-- Contenido del modal de Legal -->
  <div class="modal-content astro-SZ7XMLTE">
    <h2 class="astro-SZ7XMLTE">Aviso Legal</h2>
    <p class="astro-SZ7XMLTE">Bienvenido a la aplicación uHungry. Al acceder y utilizar esta aplicación, usted acepta los términos y condiciones establecidos en este aviso legal. Si no está de acuerdo con estos términos, le recomendamos que no utilice la aplicación.</p>
    <ol class="astro-SZ7XMLTE">
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Propiedad Intelectual</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Todos los derechos de propiedad intelectual sobre el contenido y la estructura de la aplicación, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, videos, y el software utilizado, son propiedad de uHungry o de sus licenciantes. Está prohibido copiar, reproducir, distribuir o utilizar de cualquier otra forma dicho contenido sin el consentimiento expreso de los propietarios.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Responsabilidad</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">La aplicación uHungry se proporciona "tal cual" y no ofrecemos garantías de ningún tipo, ya sean expresas o implícitas, respecto a su disponibilidad, precisión, fiabilidad o idoneidad para un propósito particular. No seremos responsables por ningún daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso o la imposibilidad de uso de la aplicación.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Riesgos Asociados</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">El uso de la aplicación y cualquier acción tomada basada en la información proporcionada en ella son bajo su propio riesgo. No seremos responsables de ningún daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso de la aplicación.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Calidad y Seguridad de Productos</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">La aplicación uHungry actúa como un intermediario entre usuarios y proveedores de comida y artículos, pero no garantizamos la calidad, seguridad o integridad de los productos ofrecidos por los proveedores. Es responsabilidad del usuario verificar la calidad y seguridad de los productos antes de realizar una compra.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Uso Aceptable</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Usted acepta utilizar la aplicación uHungry de manera legal y ética, y se compromete a no utilizarla para ningún propósito ilegal o que viole los derechos de terceros. Se prohíbe cualquier actividad que pueda interferir con el funcionamiento normal de la aplicación o que pueda comprometer su seguridad o integridad. Los usuarios son responsables de su propio comportamiento al utilizar la aplicación uHungry, y deben cumplir con todas las leyes y regulaciones aplicables. No seremos responsables de ninguna conducta inapropiada o ilegal por parte de los usuarios.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Enlaces a Terceros</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">La aplicación uHungry puede contener enlaces a sitios web o servicios de terceros. No tenemos control sobre el contenido o las prácticas de privacidad de estos sitios, por lo que no seremos responsables por ningún daño o perjuicio que pueda surgir del uso de dichos enlaces.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Jurisdicción y Ley Aplicable</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Este aviso legal se regirá e interpretará de acuerdo con las leyes de los Estados Unidos Mexicanos. Cualquier disputa que surja en relación con este aviso legal estará sujeta a la jurisdicción exclusiva de los tribunales competentes en México.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Cambios en la Aplicación</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Nos reservamos el derecho de realizar cambios o actualizaciones a la aplicación uHungry en cualquier momento, incluyendo cambios en la disponibilidad de productos, funcionalidades o políticas. No seremos responsables de ningún inconveniente que pueda surgir debido a tales cambios.</li>
        </ul>
      </li>
      <li class="astro-SZ7XMLTE"><strong class="astro-SZ7XMLTE">Cambios al Aviso Legal</strong>
        <ul class="astro-SZ7XMLTE">
          <li class="astro-SZ7XMLTE">Nos reservamos el derecho de modificar o actualizar este aviso legal en cualquier momento, lo cual será efectivo tan pronto como se publique en la aplicación. Se recomienda revisar periódicamente este aviso legal para estar al tanto de cualquier cambio.</li>
        </ul>
      </li>
    </ol>
    <!-- Botón para cerrar el modal -->
    <button id="closeLegalModalButton" class="close astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">Ok</span></button>
  </div>
</div>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Footer.astro");

const Alfredo = "/_astro/Alfredo.b5b317ae.jpg";

const Angel = "/_astro/Angel.fe0008f1.jpg";

const Azarel = "/_astro/Azarel.1f935a8c.jpg";

const Sebas = "/_astro/Sebas.f5204f65.jpg";

const Miguel = "/_astro/Miguel.acf79e88.jpg";

const $$Astro$1 = createAstro();
const $$Coworkers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Coworkers;
  return renderTemplate`${maybeRenderHead($$result)}<section class="team-section astro-4BYVOP7U">
    <h2 class="section-title astro-4BYVOP7U"><b class="astro-4BYVOP7U">Nuestro equipo de desarrollo</b></h2>
    <div class="team-members astro-4BYVOP7U">
      <div class="team-member astro-4BYVOP7U">
        <img${addAttribute(Alfredo, "src")} alt="Nombre del colaborador" class="astro-4BYVOP7U">
        <div class="overlay astro-4BYVOP7U">
          <h3 class="member-name astro-4BYVOP7U"><b class="astro-4BYVOP7U">Alfredo Vasquez Lopez</b></h3>
          <p class="member-position astro-4BYVOP7U"><b class="astro-4BYVOP7U">Full-stack developer</b></p>
          <p class="member-description astro-4BYVOP7U">Diseño arquitectura general, enfocándome en la escalabilidad y el rendimiento.</p>
          <p class="member-links astro-4BYVOP7U">
            <a href="https://github.com/DominusDrow" class="astro-4BYVOP7U">GitHub</a> |
            <a href="https://www.linkedin.com/in/dominusdrow" class="astro-4BYVOP7U">LinkedIn</a>
          </p>
        </div>
      </div>
      <div class="team-member astro-4BYVOP7U">
        <img${addAttribute(Angel, "src")} alt="Nombre del colaborador" class="astro-4BYVOP7U">
        <div class="overlay astro-4BYVOP7U">
            <h3 class="member-name astro-4BYVOP7U"><b class="astro-4BYVOP7U">Luis Avendaño Avalos</b></h3>
          <p class="member-position astro-4BYVOP7U"><b class="astro-4BYVOP7U">Full-stack developer</b></p>
          <p class="member-description astro-4BYVOP7U">Diseño, implementación y funcionalidad de la UI.</p>
          <p class="member-links astro-4BYVOP7U">
            <a href="https://github.com/kaquka" class="astro-4BYVOP7U">GitHub</a> |
            <a href="https://www.linkedin.com/in/angel-avenda%C3%B1o-avalos/" class="astro-4BYVOP7U">LinkedIn</a>
          </p>
        </div>
      </div>
      <div class="team-member astro-4BYVOP7U">
        <img${addAttribute(Azarel, "src")} alt="Nombre del colaborador" class="astro-4BYVOP7U">
        <div class="overlay astro-4BYVOP7U">
            <h3 class="member-name astro-4BYVOP7U"><b class="astro-4BYVOP7U">Azarel Pazos Quezada</b></h3>
          <p class="member-position astro-4BYVOP7U"><b class="astro-4BYVOP7U">Full-stack developer</b></p>
          <p class="member-description astro-4BYVOP7U"> Backend y funcionalidades en la app.</p>
          <p class="member-links astro-4BYVOP7U">
            <a href="https://github.com/FatKat-zzz" class="astro-4BYVOP7U">GitHub</a> |
            <a href="https://www.linkedin.com/in/azarel-pazos/" class="astro-4BYVOP7U">LinkedIn</a>
          </p>
        </div>
      </div>
      <div class="team-member astro-4BYVOP7U">
        <img${addAttribute(Sebas, "src")} alt="Nombre del colaborador" class="astro-4BYVOP7U">
        <div class="overlay astro-4BYVOP7U">
            <h3 class="member-name astro-4BYVOP7U"><b class="astro-4BYVOP7U">Sebastian Corro Castellanos</b></h3>
          <p class="member-position astro-4BYVOP7U"><b class="astro-4BYVOP7U">Full-stack developer</b></p>
          <p class="member-description astro-4BYVOP7U">Modelado de base de datos y backend.</p>
          <p class="member-links astro-4BYVOP7U">
            <a href="https://github.com/scorroc" class="astro-4BYVOP7U">GitHub</a> |
            <a href="https://www.linkedin.com/in/sebastian-corro" class="astro-4BYVOP7U">LinkedIn</a>
          </p>
        </div>
      </div>
      <div class="team-member astro-4BYVOP7U">
        <img${addAttribute(Miguel, "src")} alt="Nombre del colaborador" class="astro-4BYVOP7U">
        <div class="overlay astro-4BYVOP7U">
            <h3 class="member-name astro-4BYVOP7U"><b class="astro-4BYVOP7U">Miguel Márquez Aranda</b></h3>
          <p class="member-position astro-4BYVOP7U"><b class="astro-4BYVOP7U">Full-stack developer</b></p>
          <p class="member-description astro-4BYVOP7U">Frontend y diseño de la página web.</p>
          <p class="member-links astro-4BYVOP7U">
            <a href="https://github.com/Miguelodon1379" class="astro-4BYVOP7U">GitHub</a> |
            <a href="https://www.linkedin.com/in/miguel-angel-m%C3%A1rquez-7a2720304/" class="astro-4BYVOP7U">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Coworkers.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "uHungry? | App" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "Hero", $$Hero, {})}
	${renderComponent($$result2, "Features", $$Features, {})}
	${renderComponent($$result2, "HowToUse", $$HowToUse, {})}
	${renderComponent($$result2, "FinalCta", $$FinalCta, {})}
	${renderComponent($$result2, "Coworkers", $$Coworkers, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/pages/index.astro");

const $$file = "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
