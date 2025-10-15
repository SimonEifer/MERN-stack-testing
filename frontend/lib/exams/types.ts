import { z } from "zod";
import { examSchema } from "./schemas";

export type TExam = z.infer<typeof examSchema>;
