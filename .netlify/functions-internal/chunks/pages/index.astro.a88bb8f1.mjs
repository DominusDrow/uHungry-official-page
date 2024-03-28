import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, m as maybeRenderHead, f as renderComponent } from '../astro.e4b52218.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="description" content="Astro description">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<meta name="generator"', '>\n        <meta name="description" content="Astrobrew is a free and open-source elegant landing page for Micro SaaS products built with Astro & Skeleton CSS">\n		<title>', `</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
        
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="d2OuR1c" data-description="Support me on Buy me a coffee!" data-message="Thanks for visiting! If you like my work, support me with a beer. I'll appreciate that. Cheers!" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"><\/script>
	`, "</head>\n	<body>\n		", "\n	</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/layouts/Layout.astro");

const Logo = "/_astro/logobanner.9a023828.jpeg";

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
    <nav class="container astro-3EF6KSR2">
        <div class="nav-logo astro-3EF6KSR2">
            <a href=" " class="astro-3EF6KSR2">
                <img${addAttribute(Logo, "src")} alt="brand logo" class="astro-3EF6KSR2">
            </a>
        </div>
        <div class="nav-links astro-3EF6KSR2">
            <a href="#features" class="astro-3EF6KSR2">Features</a>
            <a href="#customers" class="astro-3EF6KSR2">Customers</a>
            <a href="#" class="astro-3EF6KSR2">Instagram</a>
        </div>
        <div class="nav-cta astro-3EF6KSR2">
            <a href="#" class="astro-3EF6KSR2">Login</a>
            <a href="#" class="button button-primary astro-3EF6KSR2">Descargar</a>
        </div>
    </nav>
</header>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Header.astro");

const Showcase$1 = "/_astro/screen1.0f98640c.jpeg";

const Cursor = "/_astro/cursor.3ccd454b.svg";

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-hero astro-BBE6DXRZ">
    <div class="container astro-BBE6DXRZ">
       <div class="row astro-BBE6DXRZ">
           <div class="one-half column astro-BBE6DXRZ">
              <div class="d-cell astro-BBE6DXRZ">
               <h1 class="h1-title astro-BBE6DXRZ">Conectando atraves de la <span class="astro-BBE6DXRZ">comida.</span></h1>
               <div class="content astro-BBE6DXRZ">
                   <p class="astro-BBE6DXRZ">uHungry es una aplicación para hacer encargos de comida a particulares </p>
                   <a href="#" class="button button-primary lg astro-BBE6DXRZ">Descargar</a>
               </div>
              </div>
           </div>
           <div class="one-half column hero-media astro-BBE6DXRZ">
               <img${addAttribute(Showcase$1, "src")} class="u-full-width astro-BBE6DXRZ" alt="Hero illustrator">
               <img${addAttribute(Cursor, "src")} alt="Cursor icon" class="astro-BBE6DXRZ">
           </div>
       </div>
    </div>
   </section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Hero.astro");

const FeatureOne = "/_astro/object-one.9a11cea8.svg";

const FeatureTwo = "/_astro/object-two.41e7c5ff.svg";

const FeatureThree = "/_astro/object-three.ead5102e.svg";

const $$Astro$4 = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead($$result)}<section class="solutions astro-VNIVFUH2" id="features">
    <div class="container astro-VNIVFUH2">
      
        <div class="row astro-VNIVFUH2">
            <div class="sol-wrap one-third column astro-VNIVFUH2">
                <div class="sol-media m-margin astro-VNIVFUH2">
                    <img${addAttribute(FeatureOne, "src")} alt="Prospect" class="astro-VNIVFUH2">
                </div>
                <h3 class="h3-title astro-VNIVFUH2">Prospect</h3>
                <p class="astro-VNIVFUH2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit ullam maxime veritatis,  possimus.</p>
            </div>
            <div class="sol-wrap one-third column astro-VNIVFUH2">
                <div class="sol-media m-margin astro-VNIVFUH2">
                    <img${addAttribute(FeatureTwo, "src")} alt="Marketing" class="astro-VNIVFUH2">
                </div>
                <h3 class="h3-title astro-VNIVFUH2">Marketing</h3>
                <p class="astro-VNIVFUH2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit ullam maxime veritatis,  possimus.</p>
            </div>
            <div class="sol-wrap one-third column astro-VNIVFUH2">
                <div class="sol-media  m-margin astro-VNIVFUH2">
                    <img${addAttribute(FeatureThree, "src")} alt="Automation" class="astro-VNIVFUH2">
                </div>
                <h3 class="h3-title astro-VNIVFUH2">Automation</h3>
                <p class="astro-VNIVFUH2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit ullam maxime veritatis,  possimus.</p>
            </div>
        </div>
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Features.astro");

const Showcase = "/_astro/showcase-two.6a0e7b6c.svg";

const $$Astro$3 = createAstro();
const $$HowToUse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HowToUse;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-defined padded astro-5FOL4UCW">
    <div class="container astro-5FOL4UCW">
         <div class="row product-brief-items astro-5FOL4UCW">
            <div class="brief-tab one-half column astro-5FOL4UCW">
                <h3 class="h1-title astro-5FOL4UCW">Spark growth and engagement</h3>
                <p class="m-paragraph m-margin astro-5FOL4UCW">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <ol class="row astro-5FOL4UCW">
                    <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Install extention</a></li>
                    <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Use any search filter</a></li>
                    <li class="one-third column astro-5FOL4UCW"><a href="#" class="astro-5FOL4UCW">Automate everything</a></li>
                </ol>
            </div>
            <div class="brief-media center one-half column astro-5FOL4UCW">
                <img${addAttribute(Showcase, "src")} alt="Showcase mockup" class="astro-5FOL4UCW">
            </div>
        </div>
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/HowToUse.astro");

const Few = "/_astro/few.3377b821.svg";

const $$Astro$2 = createAstro();
const $$FinalCta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FinalCta;
  return renderTemplate`${maybeRenderHead($$result)}<section class="fine-section padded astro-NQZR7C5X" id="customers">
    <div class="container astro-NQZR7C5X">

        <div class="arrow-image astro-NQZR7C5X">
            <img${addAttribute(Few, "src")} class="astro-NQZR7C5X">
        </div>

        <div class="testimony astro-NQZR7C5X">
            <div class="flex astro-NQZR7C5X">
                <div class="customer-pic astro-NQZR7C5X">
                    <div class="circular-image astro-NQZR7C5X">
                        <img src="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-NQZR7C5X">
                    </div>
                </div>
                <div class="customer-testimony astro-NQZR7C5X">
                    <h4 class="h3-title astro-NQZR7C5X">"I’ve been a happy Astrobrew customer since 2018. Then and now, Plutio has helped me keep my projects organized and effortless. My clients love it too - they feel more important and involved than ever before."</h4>
                    <p class="astro-NQZR7C5X">Claire Rick, Lead Developer @Slack</p>
                </div>
            </div>
        </div>


      
    </div>
</section>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/FinalCta.astro");

const Start = "/_astro/start.e4e2692e.svg";

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
    <div class="container astro-SZ7XMLTE">
      <div class="flex astro-SZ7XMLTE">
        <a href="#" class="astro-SZ7XMLTE">Help</a>
        <a href="#" class="astro-SZ7XMLTE">FAQ</a>
        <a href="#" class="astro-SZ7XMLTE">Privacy</a> <a href="#" class="astro-SZ7XMLTE">Discord</a>
      </div>
      <div class="center astro-SZ7XMLTE">
        <a href="#" class="astro-SZ7XMLTE">
          <img${addAttribute(Start, "src")} alt="" class="astro-SZ7XMLTE">
        </a>
      </div>
    </div>
</footer>`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/components/Footer.astro");

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
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/pages/index.astro");

const $$file = "D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
