import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/HomePage.css'
import Union from '../assets/images/Union.png'


const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="text-container">
          <div className="juntas">
            <h1 className="diferente">Quem</h1>
            <h1 className="estranho">Somos</h1>
          </div>
          <h1 className="text-rest">nós?</h1>
          <p className="paragrafo">Somos uma plataforma que conecta a comunidade a estudantes universitários em busca de experiência prática. Facilitamos o acesso a atendimentos específicos, como apoio psicológico e jurídico, enquanto os universitários, sob supervisão de professores qualificados, aplicam seus conhecimentos na prática. Unimos quem precisa de ajuda com quem está pronto para contribuir e aprender, promovendo crescimento pessoal e profissional para todos.</p>
        </div>
        <img className="octogono" src= {Union} alt="octogono" />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
