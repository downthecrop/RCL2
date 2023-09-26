import { defineComponent } from 'vue'
import { DotsVerticalIcon, ExternalLinkIcon, TrendingUpIcon } from '@heroicons/vue/outline'
import StatisticsChartCard from '../components/charts/StatisticsChartCard'
import BarChart from '../components/charts/BarChart'
import GithubIcon from '../components/icons/GithubIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import { users } from '../data/users'

export default defineComponent({
  setup() {
    return () => (
      <main class="p-5">
        <div>
          Something new
        </div>
        <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-200 rounded-md">
          <table class="w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {users.map(({ name, email, role, active }) => (
                <tr class="transition-all hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{name}</div>
                        <div class="text-sm text-gray-500">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class={[
                        'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full',
                        active ? 'bg-green-100' : 'bg-red-100',
                      ]}
                    >
                      {active ? 'Active' : 'Not Active'}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{role}</td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">???</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    )
  },
})
