import styled from 'styled-components'

export const TestimonialsSection = styled.div`
  padding: 60px 0 80px;

  .blockblack {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    padding: 40px 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 1200px;
    margin: 0 auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .testimonial-card {
    padding: 30px 20px;
    background: rgba(0, 0, 0, 0.8) !important;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: none;

    &:hover {
      border-color: rgba(255, 193, 7, 0.3);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      transform: translateY(-3px);
    }
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    border: 3px solid #ffc107;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #ccc;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-style: italic;
  }

  .name {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    color: white;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .role {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #ffc107;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
`
