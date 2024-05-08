import { render } from "@testing-library/react";
import { useFormik } from "formik";

import { FormikInputCustom } from "./FormikInput";

test("FormikInput", () => {
  const mockFormik = useFormik({ initialValues: { test: "" }, onSubmit: () => {} });

  render(
    <FormikInputCustom<{ test: string }> form={mockFormik} id="test" label={""} accept={""} />
  );
});
