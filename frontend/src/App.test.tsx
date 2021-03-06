import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const { container } = render(<App />)
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="MuiContainer-root makeStyles-root-1 MuiContainer-disableGutters"
  >
    <div
      class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-10"
    >
      <div
        class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3"
      >
        <div
          class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2"
        >
          <div
            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
          >
            <div
              class="MuiTypography-root makeStyles-heading-8 MuiTypography-h6 MuiTypography-gutterBottom"
            >
              Filter your results
            </div>
          </div>
          <div
            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
          >
            <div>
              <div
                class="MuiFormControl-root makeStyles-formControl-6"
              >
                <label
                  class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                  data-shrink="false"
                  id="demo-simple-select-outlined-label"
                >
                  All books
                </label>
                <div
                  class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  data-testid="ratingSelect"
                >
                  <div
                    aria-haspopup="listbox"
                    aria-labelledby="demo-simple-select-outlined-label demo-simple-select-outlined"
                    class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"
                    id="demo-simple-select-outlined"
                    role="button"
                    tabindex="0"
                  >
                    <span>
                      ???
                    </span>
                  </div>
                  <input
                    aria-hidden="true"
                    class="MuiSelect-nativeInput"
                    tabindex="-1"
                    value=""
                  />
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 10l5 5 5-5z"
                    />
                  </svg>
                  <fieldset
                    aria-hidden="true"
                    class="PrivateNotchedOutline-root-9 MuiOutlinedInput-notchedOutline"
                  >
                    <legend
                      class="PrivateNotchedOutline-legendLabelled-11"
                    >
                      <span>
                        All books
                      </span>
                    </legend>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="MuiGrid-root makeStyles-searchContainer-3 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8"
      >
        <div>
          <div
            class="MuiFormControl-root makeStyles-margin-13"
          >
            <div
              class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedStart"
              data-testid="searchInp"
            >
              <div
                class="MuiInputAdornment-root MuiInputAdornment-positionStart"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  focusable="false"
                  scale="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
              </div>
              <input
                aria-invalid="false"
                class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart"
                id="input-with-icon-adornment"
                type="text"
                value=""
              />
            </div>
          </div>
          <div
            class="makeStyles-progress-5"
          >
            <div
              class="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
              role="progressbar"
              style="width: 40px; height: 40px;"
            >
              <svg
                class="MuiCircularProgress-svg"
                viewBox="22 22 44 44"
              >
                <circle
                  class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                  cx="44"
                  cy="44"
                  fill="none"
                  r="20.2"
                  stroke-width="3.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`)

});
