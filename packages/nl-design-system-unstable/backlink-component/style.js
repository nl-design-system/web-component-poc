export default `
.nl-backlink {
  color: var(--nl-backlink-color, var(--nl-link-color, #000));
  text-decoration: none;
}

.nl-backlink__icon {
  vertical-align: middle;
  color: currentColor;
  height: 2ch;
  width: auto;
}

.nl-backlink__text {
  margin-inline-start: 1ch;
}

.nl-backlink:hover .nl-backlink__text {
  border-bottom: 1px solid currentColor;
}

.nl-backlink:hover .nl-backlink__icon {
  transform: translateX(-0.2ch);
}
`;
