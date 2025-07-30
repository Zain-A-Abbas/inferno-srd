import { NextApiRequest, NextApiResponse } from "next";
import getWayById from "../../lib/ways";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Way ID is required' });
  }

  let tempId: string;
  if (Array.isArray(id)) {
    tempId = id[0]; 
  } else {
    tempId = id;
  }

  const wayId: number = parseInt(tempId);
  try {
    const way = getWayById(wayId);  // Sync call

    if (!way) {
      return res.status(404).json({ error: 'Way not found' });
    }

    res.status(200).json(way);
  } catch (error) {
    console.error('Error fetching way:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}