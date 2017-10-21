import previewLISG from './img/preview-lisg.jpg';
import previewBlog from './img/preview-blog.jpg';
import previewCssContext from './img/preview-css-contest.jpg';
import previewPortfolioCineLC from './img/preview-portfoliocinelc.jpg';
import previewPizzaPaiFid from './img/preview-pizzapai-fid.jpg';

const projects = [{
  name: 'LoL Item Sets Generator',
  summary: 'Contenus téléchargeables pour le jeu League of Legengds',
  description: 'Outil qui propose du contenu téléchargeable pour le jeu vidéo League of Legends. Les contenus sont générés à partir de l\'API REST du jeu. Une application permet de mettre à jour ces données automatiquement et comptabilise plus d\'un million de téléchargements. Hébergé sur server dédié.',
  img: previewLISG,
  link: 'https://lol-item-sets-generator.org',
  show: true
}, {
  name: 'Mon blog',
  summary: 'Blog personnel',
  description: '',
  img: previewBlog,
  link: 'https://blog.nicolas-coutin.fr',
  show: true
}, {
  name: 'CSS context',
  summary: '',
  description: '',
  img: previewCssContext,
  link: '',
  show: false
}, {
  name: 'Portfolio Laurie Coutin',
  summary: 'Portfolio créé pour Laurie Coutin',
  description: '',
  img: previewPortfolioCineLC,
  link: 'https://portfoliocinelc.fr',
  show: true
}, {
  name: 'Pizza Paï fidélité',
  summary: 'Site fidélité de Pizza Paï (cadre professionnel).',
  description: '',
  img: previewPizzaPaiFid,
  link: null,
  show: true
}, {
  name: 'MJo Peintures',
  summary: 'Exposition de peintures de Marie-jo Coutin',
  description: '',
  img: null,
  link: 'https://mjo-peintures.fr',
  show: false
}, {
  name: 'MinEevee\'s blog',
  summary: 'Blog d\'une dessinatrice',
  description: '',
  img: null,
  link: 'https://mineevee.com',
  show: false
}];

export { projects };
