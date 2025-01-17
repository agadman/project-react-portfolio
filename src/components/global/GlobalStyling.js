import styled from 'styled-components/macro'

export const SiteSection = styled.div`
    text-align: center;
    padding: 20% 0;

    @media (min-width: 667px) {
      padding: 10% 0;
    }
  `

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.backgroundLightGrey ? 'var(--color-lightgrey)' : 'var(--color-text-white)')};
`
export const InnerWrapper = styled.div`
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
`

export const SectionTitle = styled.div`
    padding: 10px;   
    background-color: var(--color-turquoise);
    color: white;
    margin: 0 auto 30px;
    border-radius: 3px;
    width: 200px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
`

export const Tag = styled.div`
    display: flex;
    flex-wrap: wrap;

    p {
    background: var(--color-turquoise);
    color: var(--color-white);
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-decoration: none;
    line-height: 12px;
    padding: 5px;
    margin: 3px;
  }
`
