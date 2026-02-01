import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },

    diagnosis: {
      type: String,
      required: true,
    },

    symptoms: {
      type: [String], // array of symptoms
      default: [],
    },

    medicines: [
      {
        name: String,
        dosage: String,   // e.g. "2 times a day"
        duration: String // e.g. "5 days"
      }
    ],

    testReports: [
      {
        testName: String,
        result: String,
        date: Date
      }
    ],

    notes: {
      type: String,
      trim: true,
    },

    visitDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const medicalRecord = mongoose.model("medicalRecord", medicalRecordSchema);
