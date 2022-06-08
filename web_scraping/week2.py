import requests
from bs4 import BeautifulSoup

LIMIT = 50
INDEED_URL = f'https://www.indeed.com/jobs?as_and=python&limit={LIMIT}'


if __name__ == '__main__':
    indeed_results = requests.get(INDEED_URL)
    indeed_soup = BeautifulSoup(indeed_results.text, 'html.parser')
    pagination = indeed_soup.find("div", class_="pagination")
    page_anchors = pagination.find_all('a')

    page_nums = []
    for a in page_anchors[:-1]:
        page_nums.append(int(a.string))

    for i in range(page_nums[-1]):
        results = requests.get(INDEED_URL+f'&start={i*LIMIT}')
        soup = BeautifulSoup(results.text, 'html.parser')
        jobs = soup.find_all('div', class_="cardOutline")

        for idx, job in enumerate(jobs):
            job_title = job.find('h2', class_='jobTitle').find('a').find('span')['title']
            job_id = job.find('h2', class_='jobTitle').find('a')['data-jk']
            company = job.find('div', class_='company_location')
            company_name = company.find('span', class_='companyName').string
            company_loc = company.find('div', class_='companyLocation').text
            job_infos = {
                'title': job_title,
                'link': f'https://www.indeed.com/viewjob?jk={job_id}&from=web&vjs=3',
                'company': company_name,
                'location': company_loc
            }


