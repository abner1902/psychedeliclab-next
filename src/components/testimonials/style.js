import styled from 'styled-components'

export const TestimonialsSection = styled.div`
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .testimonial-card {
    padding: 30px 20px;
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
