import Link from 'next/link'
import { getAllCourses } from '@/lib/courses'

export default function Home() {
  const courses = getAllCourses()

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <nav className="relative z-10 border-b border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Tech Hub
            </Link>
            <div className="flex items-center gap-6">
              <a href="#training" className="text-sm text-gray-400 hover:text-white transition-colors">训练营</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">联系我们</a>
              <a
                href="https://github.com/zackzhangkai/claudecode-course-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29 1.02-2.68 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02 1.47 1.39 1.13 2.43 1.03 2.68.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">AI 技术学习交流社群</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              AI 时
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              代革命
            </span>
            <br />
            <span className="text-4xl md:text-6xl">从入门��实战</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            加入最前沿的 AI 技术学习社群，7 天实战训练营，手把手带你掌握 AI 开发技能
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              立即加入训练营
            </a>
            <Link
              href="/courses/lesson1-basics"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              免费预览课程
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: '500+', label: '学员总数' },
              { value: '8', label: '精品课程' },
              { value: '7', label: '天实战训练' },
              { value: '24/7', label: '技术支持' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                7 天 AI 训练营
              </span>
            </h2>
            <p className="text-gray-400">系统化学习路径，每天一个里程碑</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { day: 'Day 1', title: 'AI 基础入门', desc: '了解 AI 大模型发展历程，掌握提示词工程核心技巧', color: 'from-purple-500 to-purple-600' },
              { day: 'Day 2', title: '提示词进阶', desc: 'Few-shot 学习、思维链、角色扮演等高级技巧', color: 'from-blue-500 to-blue-600' },
              { day: 'Day 3', title: 'AI 编程实战', desc: '使用 Claude Code 进行代码开发、调试和优化', color: 'from-cyan-500 to-cyan-600' },
              { day: 'Day 4', title: '自动化工作流', desc: '构建 AI 驱动的自动化工作流程', color: 'from-green-500 to-green-600' },
              { day: 'Day 5', title: 'API 集成', desc: '调用第三方 API，实现 AI 能力扩展', color: 'from-yellow-500 to-yellow-600' },
              { day: 'Day 6', title: '项目实战', desc: '完整项目开发，从 0 到 1 落地', color: 'from-orange-500 to-orange-600' },
              { day: 'Day 7', title: '部署上线', desc: '将项目部署到生产环境', color: 'from-red-500 to-red-600' },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-sm font-medium mb-4`}>
                  {item.day}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                为什么选择我们
              </span>
            </h2>
            <p className="text-gray-400">不只是课程，更是圈子</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: '实战导向', desc: '每节课都有动手实践项目，学完就能用' },
              { icon: '💬', title: '社群答疑', desc: '加入专属学习群，导师随时答疑' },
              { icon: '📚', title: '持续更新', desc: '课程内容持续迭代，紧跟技术前沿' },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl border border-white/10">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                加入 AI 学习社群
              </span>
            </h2>
            <p className="text-gray-400 mb-8">扫码添加微信，备注"训练营"，立即加入</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="p-4 bg-white rounded-2xl shadow-2xl">
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-6xl">📱</span>
                    </div>
                    <p className="text-xs text-gray-500">微信二维码</p>
                  </div>
                </div>
              </div>
              
              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">✓</span>
                  <span className="text-gray-300">7 天完整训练营课程</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">✓</span>
                  <span className="text-gray-300">专属社群交流</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">✓</span>
                  <span className="text-gray-300">导师一对一答疑</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">✓</span>
                  <span className="text-gray-300">项目实战指导</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              * 添加微信后请备注"训练营"，等待通过后邀请入群
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">课程预览</h2>
            <p className="text-gray-400">免费预览部分课程内容</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.slice(0, 4).map((course, index) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group p-6 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold group-hover:text-purple-400 transition-colors">
                    {course.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400">{course.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 AI Tech Hub · 技术自留地 · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}