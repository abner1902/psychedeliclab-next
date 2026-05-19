import styled from 'styled-components'

export const Samplepack = styled.section`
  background: rgba(0, 0, 0, 0.7);
  padding: 60px 0;
  position: relative;
  overflow: hidden;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    color: #ffb800;
  }

  .section-subtitle {
    font-size: 1.25rem;
    text-align: center;
    color: white;
    margin-bottom: 40px;
    font-weight: normal;
  }
  
  .module-slide {
    background: rgba(10, 10, 10, 0.8);
    border-radius: 15px;
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  
  .module-image {
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    margin: 0 auto;
    display: block;
    
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  
  .slick-dots {
    bottom: -30px !important;
    display: flex !important;
    justify-content: center !important;
    
    li {
      margin: 0 5px !important;
      
      button {
        width: 12px !important;
        height: 12px !important;
        background: #555 !important;
        border-radius: 50% !important;
        
        &:before {
          display: none !important;
        }
      }
      
      &.slick-active button {
        background: #ffc107 !important;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    
    .section-title {
      font-size: 1.5rem;
    }
    
    .section-subtitle {
      font-size: 1rem;
      margin-bottom: 30px;
    }
  }
`