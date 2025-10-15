import z from "zod";

export const examSchema = z.object({
	_id: z.string().optional(),
	title: z.string().nullable(),
	subject: z.string(),
	date: z.preprocess((val) => new Date(val as string), z.date()),
	duration: z.number(),
	additionalInfo: z.string().nullable(),
});
