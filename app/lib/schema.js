import { z } from "zod";

export const onboardingSchema = z.object({
  industry: z.string({
    required_error: "Please select an industry",
  }),
  subIndustry: z.string({
    required_error: "Please select a specialization",
  }),
  bio: z
    .string({
      required_error: "Add a bio",
    })
    .max(500)
    .optional(),
  experience: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(
      z
        .number()
        .min(0, "Experience cannot be less than 0")
        .max(50, "Experience cannot exceed 50 years")
    ),
  skills: z
    .array(z.string().min(1, "Skill cannot be empty"))
    .nonempty("At least one skill is required"),
});
