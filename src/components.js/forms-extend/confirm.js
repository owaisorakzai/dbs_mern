import React from 'react';

export default function Confirmation({data,onSubmit}) {
  return <div class="container card align middle review">
  <div class="card-body">
      <p><strong>* Please Read:</strong></p>

      <p><strong> REVIEW ALL INFORMATION</strong></p>

      <p><small>Please ensure that the information you have provided is accurate and error free.</small></p>

      <p><small>PIn the next step you will be required to confirm the accuracy of this information by providing an electronic signature.</small></p>
      <form>
      <div class="form-group form-check">
      <input type="checkbox" className="form-check-input" required />
      <label class="form-check-label" for="exampleCheck1">I have provided complete and true information in support of my application and I understand that knowingly making a false statement for this purpose is a criminal offence.</label>
      <br />
      <br />
      <br />

      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      </form>
  </div>
  </div>;
}
