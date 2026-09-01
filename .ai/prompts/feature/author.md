I would like to introduce page author section in the bottom of the page with the link to my git which will be suitable for current design.

As an example you can use this template from another project:

import PaddingWrapper from './padding-wrapper';
import styles from './copyright.module.css';

export default function Copyright() {
  return (
    <PaddingWrapper className={styles.copyright}>
      <a
        href="https://github.com/IgoHz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit IHOR T.'s GitHub profile"
        className={styles.link}
      >
        &#169; {new Date().getFullYear()} IHOR T.
        <span className={styles.suffix} aria-hidden="true">
          &nbsp;
          {'>'}_
        </span>
      </a>
    </PaddingWrapper>
  );
}


.copyright {
  display: flex;
  justify-content: center;

  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: inherit;
  }

  .link {
    color: var(--theme-color-text);
    opacity: 0.6;
    text-decoration: none;
    position: relative;
    transition: color 0.2s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        opacity: 1;

        .suffix {
          opacity: 1;
        }
      }
    }

    .suffix {
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }
  }
}
