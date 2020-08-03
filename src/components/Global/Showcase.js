import React from 'react';

export default function Showcase({children, backgroundShowcase}) {
    return (
      <header className={backgroundShowcase}>
          {children}
      </header>
    )
};

Showcase.defaultProps ={
    backgroundShowcase:'defaultShowcase'
}