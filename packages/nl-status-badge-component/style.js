export default `
.nl-status-badge {
  --nl-status-badge-background-color: lightgrey;
  --nl-status-badge-color: black;

  box-sizing: border-box;
  padding-block-start: var(--nl-status-badge-padding-block, 0);
  padding-block-end: var(--nl-status-badge-padding-block, 0);
  padding-inline-start: var(--nl-status-badge-padding-inline, 0);
  padding-inline-end: var(--nl-status-badge-padding-inline, 0);
  border-radius: var(--nl-status-badge-border-radius, 0);
  text-transform: var(--nl-status-badge-text-transform, inherit);
  font-family: var(--nl-status-badge-font-family, inherit);
  font-weight: var(--nl-status-badge-font-weight, inherit);
  font-size: var(--nl-status-badge-font-size, 0.75rem);
  vertical-align: middle;
  background-color: var(--nl-status-badge-background-color);
  color: var(--nl-status-badge-color);
}

.nl-status-badge--success {
  background-color: var(--nl-status-badge-success-background-color, var(--nl-status-fill-success-color, var(--nl-status-badge-background-color)));
  color: var(--nl-status-badge-success-color, var(--nl-status-badge-success-color, var(--nl-status-badge-color)));
}

.nl-status-badge--warning {
  background-color: var(--nl-status-badge-warning-background-color, var(--nl-status-fill-warning-color, var(--nl-status-badge-background-color)));
  color: var(--nl-status-badge-warning-color, var(--nl-status-badge-warning-color, var(--nl-status-badge-color)));
}

.nl-status-badge--error {
  background-color: var(--nl-status-badge-error-background-color, var(--nl-status-fill-error-color, var(--nl-status-badge-background-color)));
  color: var(--nl-status-badge-error-color, var(--nl-status-badge-error-color, var(--nl-status-badge-color)));
}
`;
