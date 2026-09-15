"use client";

const countries = [
  ["AR", "Argentina"],
  ["ES", "España"],
  ["MX", "México"],
  ["CO", "Colombia"],
  ["CL", "Chile"],
  ["UY", "Uruguay"],
  ["US", "Estados Unidos (Miami)"],
  ["OTHER", "Otro país"],
];

function showSpanishValidation(event) {
  const field = event.target;
  if (field.validity.valueMissing) {
    field.setCustomValidity("Completá este campo.");
  } else if (field.validity.typeMismatch) {
    field.setCustomValidity("Ingresá un correo electrónico válido.");
  }
}

export default function KitSignupForm({ origin, buttonLabel, includeCountry = false }) {
  const prefix = `kit-${origin}`;

  return (
    <form
      action="https://app.kit.com/forms/9738047/subscriptions"
      method="post"
      className="signup-form"
    >
      <div className="form-field">
        <label className="form-label" htmlFor={`${prefix}-name`}>Nombre</label>
        <input
          className="form-control"
          id={`${prefix}-name`}
          type="text"
          name="fields[first_name]"
          autoComplete="given-name"
          required
          onInvalid={showSpanishValidation}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor={`${prefix}-email`}>Correo electrónico</label>
        <input
          className="form-control"
          id={`${prefix}-email`}
          type="email"
          name="email_address"
          autoComplete="email"
          inputMode="email"
          required
          onInvalid={showSpanishValidation}
          onInput={(event) => event.currentTarget.setCustomValidity("")}
        />
      </div>
      {includeCountry && (
        <div className="form-field">
          <label className="form-label" htmlFor={`${prefix}-country`}>País</label>
          <select
            className="form-control"
            id={`${prefix}-country`}
            name="fields[pais]"
            autoComplete="country"
            required
            defaultValue=""
            onInvalid={showSpanishValidation}
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          >
            <option value="" disabled>Seleccioná tu país</option>
            {countries.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
          </select>
        </div>
      )}
      <input type="hidden" name="fields[origen]" value={origin} />
      <button type="submit" className="btn btn-primary form-submit">{buttonLabel}</button>
    </form>
  );
}
