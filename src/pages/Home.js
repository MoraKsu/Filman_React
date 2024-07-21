import React from 'react';
import Header from '../components/Header/Header';
import BannerHome from '../components/BannerHome/BannerHome';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentHome from '../components/ContentHome/ContentHome';
import MediaSection from '../components/MediaSection/MediaSection';
import Footer from '../components/Footer/Footer';
import ButtonUp from '../components/ButtonUp/ButtonUp';

const Home = () => {
  return (
    <div>
      <Header />
      <BannerHome />
      <SearchBar />
      <ContentHome />
      <MediaSection />
      <Footer />
      <ButtonUp />
    </div>
  );
};

export default Home;
