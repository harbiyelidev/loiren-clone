'use client';
import axios from 'axios';
import useSWR from 'swr';
import { discordId, githubId } from './variables';

export default function SWR(url) {
  if (url === 'discord') url = 'https://api.lanyard.rest/v1/users/' + discordId;
  if (url === 'github') url = 'https://api.github.com/users/' + githubId;
  if (url === 'githubRep') url = 'https://api.github.com/users/' + githubId + '/repos';

  return useSWR(url, href => (
    axios.get(href).then((res) => res.data)
  )
  );
};