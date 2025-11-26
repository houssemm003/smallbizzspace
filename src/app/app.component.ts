import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = ['Espaces', 'Comment ça marche', 'Propriétaires', 'À propos'];

  spaceTypes = [
    'Boutique',
    'Pop-up store',
    'Atelier',
    'Showroom',
    'Galerie',
    'Espace événementiel'
  ];

  stats = [
    { value: '500+', label: 'Espaces disponibles' },
    { value: '2000+', label: 'Entrepreneurs satisfaits' },
    { value: '95%', label: 'Taux de satisfaction' }
  ];

  popularSpaces = [
    {
      name: 'Boutique Marais',
      location: 'Paris 3e, Le Marais',
      tag: 'Boutique',
      size: '45m²',
      price: '350€/jour',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Pop-up Bellecour',
      location: 'Lyon 2e, Presqu\'île',
      tag: 'Pop-up',
      size: '30m²',
      price: '200€/jour',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Showroom Vieux-Port',
      location: 'Marseille 1er, Centre',
      tag: 'Showroom',
      size: '60m²',
      price: '280€/jour',
      image: 'https://images.unsplash.com/photo-1515165562835-c4c27d1d3f61?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Galerie République',
      location: 'Paris 11e, République',
      tag: 'Galerie',
      size: '80m²',
      price: '450€/jour',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Atelier Confluence',
      location: 'Lyon 2e, Confluence',
      tag: 'Atelier',
      size: '50m²',
      price: '220€/jour',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Espace Victor Hugo',
      location: 'Toulouse, Centre',
      tag: 'Événementiel',
      size: '100m²',
      price: '500€/jour',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  howItWorks = [
    {
      title: 'Recherchez',
      description: 'Parcourez notre sélection d\'espaces vérifiés et trouvez celui qui correspond à votre projet.'
    },
    {
      title: 'Réservez',
      description: 'Contactez le propriétaire, visitez l\'espace et finalisez votre réservation en toute sécurité.'
    },
    {
      title: 'Lancez-vous',
      description: 'Recevez les clés, installez votre concept et profitez de votre espace éphémère !'
    }
  ];
}